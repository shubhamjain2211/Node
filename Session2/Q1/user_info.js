const user_info=
[
    {
        Username:'shubhu.4',
        Password:'qwert',
        FirstName:'Shubham',
        LastName:'Jain'
    },
    {
        Username:'qwe_1',
        Password:'asdfg',
        FirstName:'Asdfg',
        LastName:'Zxcv'
    },
    {
        Username:'sdf_3',
        Password:'aslkj',
        FirstName:'Sweqew',
        LastName:'Kuewqe'
    },
    {
        Username:'qwerty_e71',
        Password:'ajddsf',
        FirstName:'Skjjfsf',
        LastName:'Shfsfds'
    },
    {
        Username:'Shasa.2',
        Password:'abcsdsd',
        FirstName:'Raghav',
        LastName:'Mittal'
    },
    {
        Username:'Don_420',
        Password:'abcdeF',
        FirstName:'Shahrukh',
        LastName:'Khan'
    },
]
search_user=(username)=>{
    return user_info.filter(user=>user.Username === username);
}
module.exports={
    search_user
}

