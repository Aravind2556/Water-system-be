const Express = require('express')
const BusModel = require('../models/Bus')
const isAuth = require('../middleware/isAuth')

const BusRouter = Express.Router()



BusRouter.post('/Create-bus', async (req, res)=>{
    try{
        const {busNo,startPoint,endPoint,seatCapacity} = req.body

        if(!busNo || !startPoint || !endPoint || !seatCapacity ){
            return res.send({success: false, message: 'Please provide all details!'})
        }
        
        const fetchBus = await BusModel.findOne({busNo : busNo})
        if(fetchBus){
            return res.send({success: false, message: 'Bus already exist! Please try login.'})
        }



        const newBus = new BusModel({
         
            busNo: busNo,
            startPoint: startPoint,
            endPoint: endPoint,
            totalSeat : seatCapacity
           
        })

        const saveBus = await newBus.save()

        if(saveBus){

            return res.send({success : true , message : "Bus created successfully" , Bus : saveBus })

        }
        else{

            return res.send({success : false , mes
                : "Failed to create please try again later"
            })

        }
    }
    catch(err){
        console.log("Error in Register:",err)
        return res.send({success: false, message: 'Trouble in Registration! Please contact admin.'})
    }
})


BusRouter.get('/fetch-bus',async (req,res)=>{
    try{
        const fetch_bus = await BusModel.find({})
        if(fetch_bus){
            return res.send({success : true , Bus : fetch_bus})
        }
        else{
            return res.send({success :false , message : "Bus is not avalible"})
        }

    }
    catch(err){
        console.log("Error in Register:",err)
        return res.send({success: false, message: 'Trouble in Registration! Please contact admin.'})
    }

})




module.exports = BusRouter
