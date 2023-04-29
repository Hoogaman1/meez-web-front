async function s(req, res){
    let sd = await fetch(`http://${process.env.URL}/MASTER/list-supplier-must/`)
    let x = await sd.json();
    res.status(200).json(x);
};

export default s;