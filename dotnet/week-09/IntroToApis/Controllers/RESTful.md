API for people

## GET => Getting data

GET /api/people => return all people
GET /api/people/4 => return people #4
GET /api/people/6 => return people #6

GET /api/people/6/cars => return the cars for person #6

## POST => Creating Data

POST /api/people , BODY {new person data}

## PUT => Replace Data 

PUT /api/people/6, body {updated person data}

PUT /api/camera/5 
{
    brand:"something here",
    maxIso:100, 
    framesPerSecond:12,

}

## PATCH => Update Data

PATCH /api/people/7, body {updated person data}

PATCH /api/camera/5 
{
    brand:"something here",
    maxIso:100, 
    framesPerSecond:12,
}

## DELETE => Deleting Data


DELETE /api/people/8