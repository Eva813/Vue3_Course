const Add = (a, b) => {
  return a + b;
};

//純粹一個export的使用，就是選擇性要不要丟出去
export const Name = 'Mike';
export const age = 28;
export const remove = (a, b) => {
  return a - b;
}


//使用export default，當要載入module時，這個default就會直接被推出去
export default Add;


