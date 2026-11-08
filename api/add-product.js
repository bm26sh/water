export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    const { name, description, price, image } = req.body;

    const response = await fetch(
        "https://dyctkkedsunshhtcnfgq.supabase.co/rest/v1/products",
        {
            method: "POST",
            headers: {
                apikey: "sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF",
                Authorization: "Bearer sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF",
                "Content-Type": "application/json",
                Prefer: "return=representation"
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