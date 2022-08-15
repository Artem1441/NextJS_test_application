export default function Post3(req, res) {
    res.status(200).json(
        { "id": 3, "title": "C++", "body": "C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or \"C with Classes\"." }
    )
}