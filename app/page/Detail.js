import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionGetTopicDetail } from '../redux/action/cnode'

const Detail = ({ ssr, data, getDetail, match }) => {
  useEffect(() => {
    if (!ssr) {
      getDetail(match.params.id)
    }
  }, [])

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: data.content }} />
          <ul>
            {data.replies &&
              data.replies.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      border: '1px solid #eee',
                      padding: '5px 10px',
                      listStyle: 'none',
                      borderRadius: 5,
                      marginBottom: 10
                    }}
                  >
                    <div>
                      <img
                        style={{ width: '30px', borderRadius: 5, marginRight: '10px' }}
                        src={item.author.avatar_url}
                        alt="avatar"
                      />
                      <span>{item.author.loginname}</span>
                    </div>
                    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                )
              })}
          </ul>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default connect(
  ({ detail }) => ({ ...detail }),
  dispath => {
    return {
      getDetail: id => dispath(actionGetTopicDetail(id))
    }
  }
)(Detail)
