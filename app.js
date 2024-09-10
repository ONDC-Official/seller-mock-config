  const $RefParser = require("json-schema-ref-parser");
  const yaml = require("js-yaml");
  const fs = require("fs")
  var uiPath = "./build/build.js";
  var uiPathJson = "./build/build.json";
  
  const outputFolderPath = "./build";
  
  
  const indexYamlPath = './configs/main.yaml'
  
  
  // read yaml
  async function baseYMLFile(file) { 
      try {
        const schema = await $RefParser.dereference(file);
        return schema;
      } catch (error) {
        console.error("Error parsing schema:", error);
      }
    }
  
  
  
    function outputBuild(outputPath,flow){
        fs.writeFileSync(`${outputFolderPath}/${outputPath}`, JSON.stringify(flow), "utf8");
    }
  
    // driver 
    (async function driver(){
      const args = process.argv[2]
      let config = await baseYMLFile(indexYamlPath)
      config = config?.configs
      if(!args){ // run all flows
        let path= {flows:[]};
        for (const flow of config){
          outputBuild(flow.filename,flow.path)
          path.flows.push(flow.path.flows)
        }
        outputBuild("build.json",path)
      }else{ // run only specific flow
        const flow = config.find((element)=>args===element.domain)
        outputBuild(flow.filename,flow.path)
      }
      
    })()
  
  
  
  
  
  
  