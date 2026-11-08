export default async function handler(req, res) {

    if (req.method !== "DELETE") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    const { id } = req.body;

    if (!id) {
        return res.status(400).json({
            message: "상품 ID가 필요합니다."
        });
    }

    const response = await fetch(
        `https://dyctkkedsunshhtcnfgq.supabase.co/rest/v1/products?id=eq.${id}`,
        {
            method: "DELETE",
            headers: {
                apikey: "sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF",
                Authorization: "Bearer sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF"
            }
        }
    );

    res.status(response.status).json({
        success: response.ok
    });
}