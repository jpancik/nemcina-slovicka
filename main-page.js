const loadScript = (FILE_URL, async = true, type = "text/javascript") => {
  return new Promise((resolve, reject) => {
    try {
      const scriptEle = document.createElement("script");
      scriptEle.type = type;
      scriptEle.async = async;
      scriptEle.src = FILE_URL;
      scriptEle.charset = 'UTF-8';

      scriptEle.addEventListener("load", (ev) => {
        resolve({ status: true });
      });

      scriptEle.addEventListener("error", (ev) => {
        reject({
          status: false,
          message: `Failed to load the script ${FILE_URL}`
        });
      });

      document.body.appendChild(scriptEle);
    } catch (error) {
      reject(error);
    }
  });
};

async function loadScripts() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var scriptName = urlParams.get('wordlist');
  console.log(`Starting the script load script=${scriptName}.`);
  await loadScript(`words/${scriptName}.js`);
  console.log("Loaded words script.");
  await loadScript('main.js');
  console.log("Loaded flash cards script.");
}

loadScripts();