import React from 'react';

import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Introduce = () => {
  return (
    <>
      <div style={{ width: 600, margin: 50, position: 'absolute', left: '49%', marginTop: 800}}>
        <Typography>
          <Title style={{ textAlign:'center' }}>RESTROPECT 란?</Title>
          <br/>
          <Paragraph>
            회고를 의미합니다. 최근 개발자가 되기위해 공부를 하면면서 기록의 중요성을 깨닳고 매일 기록을 하고
            있습니다. 그냥 일기가 아닌 오늘 내가 무엇을 배웠고 무엇을 느꼈고 어떤 문제가 있었고 내일은 무엇을
            할지 상세하게 적습니다. 그렇게 하다 보니 같은 상황에서 좀 더 좋은 선택을 하게 되고 같은 에러를 만
            났을 때 내가 어떻게 해결했었는지 기록을 해놨기 때문에 같은 실수를 하게 될 확률이 줄어든 것 같습니
            다. 이 서비스의 기능은 매우 간단합니다. 매일 기록하고 얼마나 꾸준히 기록했는지 달력으로 나타내줍
            니다.
          </Paragraph>
          <Paragraph style={{ textAlign:'center' }}> 
            <Text strong>
              당신이 배운 것을 잊혀지도록 두지 않기를 바랍니다.
            </Text>
          </Paragraph>
          <Title level={2} style={{ textAlign:'center' }}>Guidelines and Resources</Title>
          <Paragraph>
            회고를 작성하기 위한 여러 방법들이 있습니다. 그 중에서 도움이 될만한 글들의 링크 입니다.
          </Paragraph>

          <Paragraph style={{ textAlign:'center' }}>
            <ul>
              <li>
                <a href="https://dal-lab.com/2019/09/18/today-i-learned/">dal-lab</a>
              </li>
              <li>
                <a href="https://blog.outsider.ne.kr/1141">일일 커밋</a>
              </li>
              <li>
                <a href="https://github.com/kimhecan">개발자 github</a>
              </li>
            </ul>
          </Paragraph>
          <Divider />
        </Typography>
      </div>
    </>
  )
}


export default Introduce