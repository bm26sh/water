export default async function handler(req, res) {

    if (req.method !== "PATCH") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    const { id, name, description, price, image } = req.body;

    if (!id) {
        return res.status(400).json({
            message: "상품 ID가 필요합니다."
        });
    }

    const response = await fetch(
        `https://dyctkkedsunshhtcnfgq.supabase.co/rest/v1/products?id=eq.${id}`,
        {
            method: "PATCH",
            headers: {
                apikey: "sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF",
                Authorization: "Bearer sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                description,
                price,
                image
            })
        }
    );

    const data = await response.json();

    res.status(response.status).json(data);
}