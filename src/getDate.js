const getDate=function(){
    const data=new Date();
    let date=data.getDate();
    let month=data.getMonth()+1;
    const year=data.getFullYear();
    if(date<10){
        date='0'+date;

    }
    if(month<10){
        month='0'+month;
    }
    return `${year}-${month}-${date}`;
};
export default getDate;