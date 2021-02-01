import React from 'react'


const Rate = ({rating, setrating}) => {
    let starArray=[];

    for (let i=0;i<5;i++)
    {
        if (i < rating) {
            starArray.push(
              <span key={i}
                className="rating"
                style={{ cursor: "pointer", color:"#FFD700" }}
                onClick={() => setrating(i + 1)}
              >
                ★
              </span>
            );
          } else {
            starArray.push(
              <span key={i}
                className="rating"
                style={{ cursor: "pointer" }}
                onClick={() => setrating(i + 1)}
              >
                ☆
              </span>
            );
          }
    }
    return (
        <div>
            {starArray}
        </div>
    )
}

export default Rate
