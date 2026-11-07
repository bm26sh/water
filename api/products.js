export default function handler(req, res) {

  if (req.method === "GET") {

    res.status(200).json({
      message: "상품 API 연결 성공",
      products: []
    });

    return;
  }


  if (req.method === "POST") {

    const product = req.body;


    res.status(200).json({
      success: true,
      added: product
    });

    return;
  }


  res.status(405).json({
    error: "Method not allowed"
  });

}