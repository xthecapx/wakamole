require.config({
    "baseUrl": 'scripts',
    "paths": {
        "jQuery": "../libs/jquery/jquery",
        "marked": "../libs/marked-min/marked.min",
        "react": "../libs/react/react",
        "reactDOM": "../libs/react/react-dom",
        "views": "../components/views"
    },
    "shim": {
        "jQuery": {
          "exports": "$"
        },
        "marked": {
          "exports": "marked"
        },
        "react": {
          "exports": "React",
          "deps": ['jQuery', 'marked']
        },
        "reactDOM": {
          "exports": "reactDOM",
          "deps": ['react', 'jQuery', 'marked']
        }
    }
});
