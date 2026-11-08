export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    const { password } = req.body;

    const url = "https://dyctkkedsunshhtcnfgq.supabase.co/rest/v1/admins?select=id,password_hash";

    const response = await fetch(url, {
        headers: {
            apikey: "여기에_Publishable_key",
            Authorization: "Bearer 여기에_Publishable_key"
        }
    });

    const admins = await response.json();

    if (!admins.length) {
        return res.status(401).json({
            success:false
        });
    }

    const check = await fetch(
        "https://dyctkkedsunshhtcnfgq.supabase.co/rest/v1/rpc/check_admin_password",
        {
            method:"POST",
            headers:{
                apikey:"여기에_Publishable_key",
                Authorization:"Bearer 여기에_Publishable_key",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                input_password:password
            })
        }
    );

    const result = await check.json();

    if(result === true){
        return res.json({
            success:true
        });
    }

    res.status(401).json({
        success:false
    });
}