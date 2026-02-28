//console.log('5' - 3);   ??
//console.log(true + true);
// console.log(0 ?? 'hello');

//let a = 5; let b = a++; 
//console.log(a, b);

//if ('') { console.log('yes'); } else { console.log('no'); }

//console.log(Boolean([]));

//for (let i = 0; i < 5; i++) { if (i === 3) break; } console.log(i);


//API Response Status Code Validator


let statusCode = 400;
switch (statusCode) {
    case 200:
        console.log("PASS - OK: Request successful");
        break;
    case 201:
        console.log("PASS - Created: Resource created successfully");
        break;
    case 301:
        console.log("WARNING - Moved Permanently: URL has changed");
        break;
    case 400:
        console.log("FAIL - Bad Request: Check request payload");
        break;
    case 401:
        console.log("FAIL - Unauthorized: Check auth token");
        break;
    case 403:
        console.log("FAIL - Forbidden: Insufficient permissions");
        break;
    case 404:
        console.log("FAIL - Not Found: Check endpoint URL");
        break;
    case 500:
        console.log("FAIL - Internal Server Error: Backend issue");
        break;
    default:
        console.log("UNKNOWN - Unhandled status code");
}
