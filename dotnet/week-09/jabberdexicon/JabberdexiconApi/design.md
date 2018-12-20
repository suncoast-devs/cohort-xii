# Endpoints

GET api/words/{letter}
return
    [
        {   
            id:00,
            word:"xxxx"
        },
        ...
    ]


POST api/words
in:
    {
        word:"xxxx"
    }

return 
    {
        id:00,
        word:"xxxx"
    }