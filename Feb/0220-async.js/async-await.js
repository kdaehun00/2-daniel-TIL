class Myclass {
    usertrue(id, pw){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    id === "admin" && pw === "admin" ||
                    id === "daniel" && pw === "daniel" 
                ) {
                    resolve(id);
                } else {
                    reject(new Error('error'));
                }
            }, 2000);
        })
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === "admin"){
                    resolve(user);
                }else{
                    reject(new Error('error'));
                }
            }, 1000)
    })
}
};

const myclass = new Myclass();
const id = "admin"
const pw = "admin"


async function go() {
    try{
        const user = await myclass.usertrue(id, pw);
        const userwithroles = await myclass.getRoles(user);

        console.log("success");
    } catch (error) {
        console.log("error")
    }    
}

go();