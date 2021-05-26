module.exports = (m, {
    isSnippet
}) => {
    return m("footer", [
        m("div.footer-keybindings",
            m(
                "a#newButton.submit", {
                    href: "/"
                },
                [
                    m("code.shortcut-text", ["New Snippet"]), m("span.keyboard-shortcut", [": Ctrl + Alt + A"])
                ],
            ),
            "  ",
            m(
                "button#actionButton.submit", {
                    type: "submit",
                    formaction: isSnippet ? "fork" : "/",
                    formenctype: "application/x-www-form-urlencoded",
                    formmethod: "post",
                    form: "codeSnippet",
                },
                isSnippet ?
                [m("code.shortcut-text", ["Fork"]), m("span.keyboard-shortcut", [": Ctrl + Alt + F"])] :
                [m("code.shortcut-text", ["Save"]), m("span.keyboard-shortcut", [": Ctrl + S"])],
            ),
            isSnippet ?
            ["  ",
                m(
                    "a#rawButton.submit", {
                        href: "?raw=true"
                    },
                    [
                        m("code.shortcut-text", ["Raw"]), m("span.keyboard-shortcut", [": Ctrl + Alt + R"])
                    ],
                ),
            ] :
            [""],
            " "
        ),
        m("code.footer-text", [
            " Built by",
            m(
                "a", {
                    href: "https://github.com/MKRhere",
                    target: "blank",
                    rel: "noopener"
                },
                "@MKRhere"
            ),
            ", Modified by",
            m(
                "a", {
                    href: "https://github.com/SitiSchu",
                    target: "blank",
                    rel: "noopener"
                },
                "@SitiSchu,"
            ),
	    m(
		"a", {
			href: "https://github.com/nitanmarcel",
			target: "blank",
			rel: "noopener"
		     },
		     "@nitanmarcel"
      	     ),
            "",
            m(
                "a", {
                    href: "https://github.com/nitanmarcel/memocho",
                    target: "blank",
                    rel: "noopener"
                },
                "Fork me!"
            ),
        ]),
    ]);
};
