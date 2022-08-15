export default function Post2(req, res) {
    res.status(200).json(
        { "id": 2, "title": "Python", "body": "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected." }
    )
}