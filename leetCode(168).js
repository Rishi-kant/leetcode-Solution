
var convertToTitle = function(columnNumber) {
          // If less than 26 then return direct
          if (columnNumber < 26) return String.fromCharCode(65 + columnNumber - 1);
  
          let add = '';
  
          // Loop where each instace will run based on char & temp values
          while (columnNumber > 0) {
              const temp = Math.floor(columnNumber % 26) - 1;
  
              // If the number is greater than 26 and the temp value is -1 then replace with 0          otherwise it will take less value (64)
              add = columnNumber > 26 ? String.fromCharCode(65 + (temp == -1 ? 26 - 1 : temp)) +           add : String.fromCharCode(65 + columnNumber - 1) + add;
              columnNumber = Math.floor((columnNumber - 1) / 26);
          }
          return add;  
          };
          console.log(convertToTitle(1))