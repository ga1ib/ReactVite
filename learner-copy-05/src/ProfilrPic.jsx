
function ProfilePic(){
const imageUrl = './src/assets/mdl08.jpg';
const handleclick = (e) => e.target.style.display = 'none';
return (<img onClick = {(e) => handleclick(e)} src={imageUrl}></img>);

}
export default ProfilePic;