import { BookmarkBorder, ChatBubbleOutline, FavoriteBorderOutlined, Telegram } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

const post = () => {
  return (
    <div className='container px-4 mx-auto my-8 bg-neutral-100 rounded-md shadow-md post'>
      <div className="flex justify-between items-center px-2 py-2">
      <Avatar>R</Avatar>
      rashi_reader <span>12h</span>
      </div>
      <div className="">
        <img src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg" alt=" " className='w-70' />
      </div>
      <div className="">
        <div className="main-icon flex justify-between">
            <div className="left-icon">
                <FavoriteBorderOutlined />
                <ChatBubbleOutline />
                <Telegram />
            </div>
            <div className="right">
                <BookmarkBorder />
            </div>
        </div>
        <div className="content">
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. debitis voluptas placeat tenetur aliquid sit totam sed reprehenderit nostrum.</span>
        </div>
      </div>
    </div>
  )
}

export default post
