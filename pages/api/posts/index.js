export default function Posts(req, res) {
    res.status(200).json(
        [
            { "id": 1, "title": "Javascript", "body": "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries" },
            { "id": 2, "title": "Python", "body": "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected." },
            { "id": 3, "title": "C++", "body": "C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or \"C with Classes\"." }
        ]
    )
}