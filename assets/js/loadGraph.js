console.log('Loading graph...');
function loadGraph (jsonFile) {
    document.onreadystatechange = function () {
        init(jsonFile);
        if (document.readyState !== "complete") {
            document.getElementById("neo4jd3").style.visibility = "hidden";
            document.getElementById("loading_indicator").style.visibility = "visible";
        } else {
            setTimeout(() => {
                document.getElementById("loading_indicator").style.display = "none";
                document.getElementById("neo4jd3").style.visibility = "visible";
            }, 3000)
        }
    };
};
