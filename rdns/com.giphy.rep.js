{
    "struct": {
        "name": "mXnO9IiWWarkI",
        "width": 480,
        "height": 324
    },
    "rep": function /*CodeBlock*/ () {
        return {
            tag: domplate.tags.IMG({
                src: "$name|generateURL"
            }),
            generateURL: function (name) {
                return 'https://media.giphy.com/media/' + name + '/giphy.gif';
            }
        };
    },
    "tests": {
        "01": {
            "result": (html () >>>
                <img src="https://media.giphy.com/media/mXnO9IiWWarkI/giphy.gif" class=" ">
            <<<)
        },
        "02": {
            "result": (html () >>>
                <img src="https://media.giphy.com/media/mXnO9IiWWarkI/giphy.gif" class=" ">
            <<<)
        }
    }
}