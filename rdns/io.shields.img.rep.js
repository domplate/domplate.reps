{
    "struct": {
        "subject": "domplate",
        "status": "Rocks!",
        "color": "green"
    },
    "rep": function /*CodeBlock*/ () {
        return {
            tag: domplate.tags.IMG({
                src: "$subject,$status,$color|generateURL"
            }),
            generateURL: function (subject, status, color) {
                return 'https://img.shields.io/badge/' + subject + '-' + status + '-' + color + '.svg';
            }
        };
    },
    "tests": {
        "01": {
            "result": (html () >>>
                <img src="https://img.shields.io/badge/domplate-Rocks!-green.svg" class=" ">
            <<<)
        },
        "02": {
            "result": (html () >>>
                <img src="https://img.shields.io/badge/domplate-Rocks!-green.svg" class=" ">
            <<<)
        }
    }
}