export default async function handler(req, res) {
  const url = "https://dyctkkedsunshhtcnfgq.supabase.co/rest/v1/products";

  const response = await fetch(url, {
    headers: {
      apikey: "sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF",
      Authorization:
        "Bearer sb_publishable_43tRJ0YbfUYfm0Qjzfy4mQ_vgELAIZF"
    }
  });

  const data = await response.json();

  res.status(200).json(data);
}