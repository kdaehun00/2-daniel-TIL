class Myclass {
    usertrue(id, pw, onSuccess, onError){
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

    getRoles(user, onSuccess, onError){
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
const id = "daniel"
const pw = "daniel"


// promise로 해결하기
myclass.usertrue(id, pw)
.then(myclass.getRoles)
.then(user => console.log(user.id))
.catch(console.log("error 444"));

// 이러면 콜백 지옥이다!
/*
myclass.usertrue(id, pw,
    user => {
        myclass.getRoles(user,
            userwithroles => {
                console.log("안녕 " + userwithroles.id)
            },
            error => console.log('error 2')
        )
    },
    error => { console.log('error 1')}
) */

