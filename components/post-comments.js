import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getPostComments } from 'services'

const PostComments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getPostComments(slug).then(setComments)
  }, [])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {comments.length}
        {` `}
        Comments
      </h3>
      {comments.map((comment) => (
        <div
          className="border-b border-gray-100 mb-4 pb-4"
          key={comment.createdAt}
        >
          <p className="mb-4">
            <span className="font-semibold">
              {comment.name}
            </span>
            {` `}
            on
            {` `}
            {moment(comment.createdAt).format('MMM DD, YYYY')}
          </p>
          <p className="whitespace-pre-line text-gray-600 w-full">
            {parse(comment.text)}
          </p>
        </div>
      ))}
    </div>
  )
}

export default PostComments
