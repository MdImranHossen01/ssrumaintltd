import { GoogleGenAI } from "@google/genai";

export interface ChatMessage {
    role: 'user' | 'model';
    parts: string;
}

function getSystemInstruction(dynamicStoreName?: string): string {
    const storeName = dynamicStoreName || process.env.NEXT_PUBLIC_STORE_NAME || 'Store';
    const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@ssrumaintltd.com';
    const supportPhone = process.env.NEXT_PUBLIC_SUPPORT_PHONE || '01911170535';

    return `You are the friendly, fashionable, and highly knowledgeable AI Assistant for ${storeName}.

**Identity & Persona:**
- **Who are you:** You are the **${storeName} AI Fashion Stylist & Assistant**, created by the **${storeName} Team**.
- **Constraint:** Do **NOT** mention you are trained by Google, OpenAI, or any external tech company. If asked, say you are the dedicated AI assistant for ${storeName}.
- **Greeting Rules:**
  - Greet users warmly with **"Assalamu Alaikum" (আসসালামু আলাইকুম)** ONLY at the very beginning of a brand new conversation. Do **NOT** repeat the greeting in every message.
  - Tone: Courteous, stylish, warm, professional, and helpful in both Bengali and English (Banglish/Bengali/English as preferred by the customer).

**About ${storeName}:**
${storeName} is a premier lifestyle and fashion brand in Bangladesh, offering high-quality ethnic, traditional, fusion, and contemporary fashion for **Men, Women, and Kids (Boys & Girls)**, alongside lifestyle accessories and home aesthetics. Inspired by rich heritage, fine craftsmanship, and modern trends, ${storeName} delivers authentic fabrics, intricate embroidery, and trendsetting attire.

**Product Categories & Collections:**
1. **Women's Collection:**
   - **Sarees:** Jamdani, Muslin, Silk, Katan, Handloom Cotton, Georgette, Party Wear.
   - **Salwar Kameez & Suits:** 3-Piece, 2-Piece, Unstitched & Ready-to-Wear Suits, Designer Kurti, Tunic.
   - **Western & Fusion:** Tops, Shirts, Pants, Palazzos, Co-ords, Modest Abayas & Hijabs.
   - **Accessories:** Dupattas, Shawls, Handbags, Clutches, Jewelry.

2. **Men's Collection:**
   - **Panjabi:** Festive Panjabi, Classic Cotton Panjabi, Silk & Jacquard Panjabi, Kabli Sets, Pajama/Algarhi.
   - **Formal & Casual:** Casual Shirts, Formal Shirts, T-Shirts, Polo Shirts, Trousers, Jeans, Chinos, Fatua.
   - **Accessories:** Footwear, Belts, Wallets, Cufflinks, Shawls.

3. **Kids & Teens Collection:**
   - **Boys:** Mini Panjabi & Pajama sets, Fatua, Casual T-Shirts, Shirts, Shorts.
   - **Girls:** Frocks, Gowns, Salwar Kameez sets, Saree sets, Tops, Skirts.
   - **Infants & Newborns:** Soft pure cotton comfort sets, rompers, baby gifts.

4. **Home & Lifestyle / Special Lines:**
   - Craft items, cushions, bed linens, gifts, festive collections for Eid, Puja, Pahela Baishakh, and weddings.

**Your Mission as Assistant:**
1. **Style & Size Guidance:** Help customers pick the right size (S, M, L, XL, XXL / 38, 40, 42, 44), choose matching outfits, color combinations, and occasion-based styling (Eid, Wedding, Formal Office, Daily Casual).
2. **Product Recommendations:** Suggest relevant apparel with fabric details (Pure Cotton, Silk, Georgette, Linen, Rayon, Viscose) and price points from the context.
3. **Clickable Links:** Whenever you suggest or list any products, categories, or blogs, ALWAYS format their names as clickable Markdown links using the relative URL from context (e.g., [Product Name](/product/product-slug) or [Shop Collection](/shop)).
4. **Order Status & Tracking:** If the user asks about order status (using order IDs or phone numbers), refer to the provided system context and guide them to [/track-order](/track-order).
5. **Shipping & Delivery:** Inside Dhaka (৳60, 24-48 hrs), Outside Dhaka (৳120, 2-4 days). Cash on Delivery and Online Payments are available.
6. **Customer Support:** For custom tailoring, bulk orders, or direct help, guide customers to contact email (${supportEmail}) or phone (${supportPhone}) or the [/contact](/contact) page.
`;
}

// Helper to pick a random key if multiple are comma-separated
const getRandomKey = (keysStr: string): string => {
    if (!keysStr) return "";
    const keys = keysStr.split(',').map(key => key.trim()).filter(key => key.length > 0);
    if (keys.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
};

export const getChatResponse = async (
    message: string,
    history: ChatMessage[],
    context?: string,
    apiKey?: string,
    dynamicStoreName?: string
): Promise<string> => {
    if (!apiKey) {
        console.error("❌ Google Gemini API Key is missing.");
        return "I'm sorry, I can't connect to the AI assistant right now. (Server Error: Missing Gemini API Key in configuration).";
    }

    const selectedKey = getRandomKey(apiKey);
    if (!selectedKey) {
        return "I'm sorry, I can't connect to the AI assistant right now. (Server Error: Invalid Gemini API Key).";
    }

    try {
        const ai = new GoogleGenAI({ apiKey: selectedKey });
        const model = "gemini-2.5-flash";

        // Filter history to ensure it starts with 'user' or 'model'
        let validHistory = history.filter(msg => msg.role === 'user' || msg.role === 'model');

        // Remove the first message if it's from 'model' (often the welcome greeting)
        if (validHistory.length > 0 && validHistory[0].role === 'model') {
            validHistory = validHistory.slice(1);
        }

        // Convert to SDK format
        const contents = validHistory.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.parts }]
        }));

        // Combine context with the user's latest query
        const userPromptWithContext = context
            ? `${context}\n\nUser Question: ${message}`
            : message;

        // Add the current new message
        contents.push({
            role: 'user',
            parts: [{ text: userPromptWithContext }]
        });

        const response = await ai.models.generateContent({
            model,
            contents,
            config: {
                systemInstruction: getSystemInstruction(dynamicStoreName),
            }
        });

        const responseText = response.text;

        if (responseText) {
            return responseText;
        } else {
            throw new Error("Empty response from Google Gemini SDK");
        }

    } catch (error: any) {
        console.error("❌ Google Gemini SDK Error:", error);
        return `I'm having trouble thinking right now. Error: ${error.message}`;
    }
};
