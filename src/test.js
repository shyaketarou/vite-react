const testArray= [
    'https://www.cna.com.tw/news/aipl/202408070192.aspx',
    'https://www.cdns.com.tw/articles/1061237',
    'https://www.chinatimes.com/realtimenews/20240807003746-260407?ctrack=pc_main_rtime_p02&chdtv',
    'https://www.ctee.com.tw/news/20240807701190-430101'
]

function convertToName(inputArray) {
    const arrayLength = inputArray.length //4
    const resultArray =[]
    for (let i=0; i<arrayLength; i++) {
        switch (true) {
            case inputArray[i].includes("cna"):
                resultArray.push("Central News Agency")
            break;
            case inputArray[i].includes("cdns"):
                resultArray.push("China Daily News")
            break;
            case inputArray[i].includes("chinatimes"):
                resultArray.push("China Times")
            break;
            case inputArray[i].includes("ctee"):
                resultArray.push("Commercial Times")
            break;
        }
    }
    return resultArray
}

const namedArray= convertToName(testArray)