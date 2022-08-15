export default function Post1(req, res) {
    setTimeout(() => {
        res.status(200).json(
            { "id": 1, "title": "Javascript", "body": "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries" })
    }, 3000)

}