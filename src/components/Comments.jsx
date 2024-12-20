import React from 'react'

const commentsdata = [
  {
    name:"Suraj",
    text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
    replies:[]
  },
  {
    name:"Suraj",
    text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
    replies:[{
      name:"Suraj",
      text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
      replies:[{
        name:"Suraj",
        text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
        replies:[{
          name:"Suraj",
          text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
          replies:[]
        },]
      },]
    },]
  },
  {
    name:"Suraj",
    text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
    replies:[{
      name:"Suraj",
      text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
      replies:[{
        name:"Suraj",
        text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
        replies:[]
      },]
    },]
  },
  {
    name:"Suraj",
    text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
    replies:[]
  },
  {
    name:"Suraj",
    text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
    replies:[{
      name:"Suraj",
      text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
      replies:[{
        name:"Suraj",
        text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
        replies:[{
          name:"Suraj",
          text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
          replies:[{
            name:"Suraj",
            text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
            replies:[]
          },]
        },]
      },]
    },]
  },{
    name:"Suraj",
    text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
    replies:[{
      name:"Suraj",
      text:"jfgsdjfsj sfsdhfdsjf sdhfdshfdsjfh sfbsdjhfsjhgewdjsasdvf",
      replies:[]
    },]
  },  

]

const Comment = ({data}) =>{
  const {name,text,replies} = data;
   return  <div className='flex bg-gray-600 p-2 rounded-lg my-2'>
   <img className='w-12 h-12' src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="logo" />

 <div className='px-3'>
   <p className='font-bold'>{name}</p>
   <p>{text}</p>
 </div> 
 </div>
}

const CommentList = ({comments}) =>{

 return comments && comments.map((comment,index)=> (
    <div>
      <Comment data={comment} key={index} />
      <div className='pl-5  border-l-slate-300 ml-5'>
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
}
const Comments = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments section</h1>
      {/* <Comment data={commentsdata[0]}/> */}
      <CommentList comments={commentsdata} />
    </div>
  )
}

export default Comments