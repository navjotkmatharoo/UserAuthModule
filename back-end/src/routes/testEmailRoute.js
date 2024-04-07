import { sendEmail } from "../../util/SendEmail";

export const testEmailRoute={
path:'/api/test-email',
method:'post',
handler: async (req,res) =>{
    try{
        await sendEmail({
            to: 'navjotk.sohal+test1@gmail.com',
            from : 'navjotk.sohal@gmail.com',
            subject: 'Does this work',
            text:'if you\'re reading this ....then yes it works! ',
          

        });
        res.sendStatus(200);
    }
    catch(err)
    {
        console.log(err);
        res.sendStatus(500);
    }
}
}