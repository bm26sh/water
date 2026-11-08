export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    const { password } = req.body;

    const response = await fetch(
        "https://dyctkkedsunshhtcnfgq.supabase.co/rest/v1/rpc/check_admin_password",
        {
            method: "POST",
            headers: {
                apikey: "sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF",
                Authorization: "Bearer sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                input_password: password
            })
        }
    );

    const result = await response.json();

    if(result === true){
        return res.json({
            success:true
        });
    }

    return res.status(401).json({
        success:false
    });
}