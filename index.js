#!/usr/bin/env node
const path = require ('path');
const os = require('os');

//process.argv => arr => path of file, path of env and arguments(dry-run)
const isDryRun = process.argv.includes("--dry-run"); //returns boolean

// const fsPromises = require('fs').promises;

// const fs = require ('fs/promises');
// const {existsSync} = require('fs');
const fs = require('fs');
// const path = ('path');

const homeDirectory = os.homedir();   //points to the home directory of user not to root directory of system

// console.log(homeDirectory);

const downloadPath = path.join(homeDirectory,'Downloads'); //path  =>  home directory

// console.log(downloadPath);
console.log('Starting your download folder');
 function readDownload(){   // function to read the download
try {

    if(fs.existsSync(downloadPath)){

        const entries = fs.readdirSync(downloadPath,{ withFileTypes : true});
        console.log(`no of files : ${entries.length}`);
       // console.log(entries)
       //the entries will hold dirent object
        for (const entry of entries){
        if(entry.isFile()){
// && path.extname(entry.name) == '.xlsx'             
            
            let category = getCategory(entry.name)
            // if(entry.name == category){
            //     continue;
            // }
            let fileDestination = path.join(downloadPath,category);
            if(!fs.existsSync(fileDestination)){
                fs.mkdirSync(fileDestination,{recursive : true});
            }
            let safeName = checkFile(fileDestination,entry.name);
            // console.log(`${entry.name} =>${path.join(category,safeName)}`);
            const sourcePath = path.join(downloadPath, entry.name);
            const destinationPath = path.join(fileDestination, safeName);

            if(isDryRun){
                console.log(`[DRY RUN] ${entry.name} → ${path.join(category, safeName)}`);
            }else{
                
                try {
                    fs.renameSync(sourcePath, destinationPath);
                    } catch (err) {
                                    console.error(`Failed to move ${entry.name}:`, err.message);
                                    }
            }


        }
    }
    console.log('All files are sorted :)');
    }
} catch (error) {
    
    console.error('error : ',error);
}
}

readDownload();

function getCategory(fileName){  //function to get category
  const filename = path.extname(fileName).toLowerCase();  // gets the extension
//   console.log('filename is : ',filename) 
//   console.log(typeof(filename))
    const fileCategory = {    //object containing all file extensions
        fileType : [
            {Image :['.jpg','.png','.jpeg']},
            {Docs :['.xlsx' , '.pdf' ,'.docx','.xls']},
            {Video : ['.mkv']},
            {Music : ['.mp3']}
        ]
        
    }
    for(let i = 0 ; i < fileCategory.fileType.length ; i++){
        let currentObj = fileCategory.fileType[i]; //points to current objec
        let keys = Object.keys(currentObj); // get the key array
        let getKeys = keys[0]; //point out the value from the key return string
        let getValues = currentObj[getKeys]//return value of key using box notation of object
        //  console.log(currentObj);
        //  console.log(keys)
        //  console.log(getKeys)
        // console.log(getValues)
         for(let j = 0 ; j < getValues.length ; j++){
           if(getValues[j] == filename){ //loop comparing all values
               return getKeys;
           }
          
        }
    }
    return 'Other';
}
// const value = getCategory('abc.jpg');
// console.log('file belong to :',value);

function checkFile(filePath,fileName){
    let fileDetail = path.parse(fileName);
    let nameOfFile = fileDetail.name;
    let fileExt = fileDetail.ext;
    let pathOfFile = path.join(filePath,fileName)
    let i = 1;
    let candidateName;
    // let candidateName = nameOfFile + fileExt
    // console.log(candidateName)
    while(fs.existsSync(pathOfFile)){
      // nameOfFile += `${i}`;
      candidateName = nameOfFile+`${i}`+fileExt;
      pathOfFile = path.join(filePath,candidateName);
      i++;
    }
    return candidateName || fileName;
}
//  checkFile('./document/documents','report.pdf');

