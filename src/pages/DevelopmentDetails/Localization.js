import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class Localization extends Component {
  render() {
    const name = "Javascript Localization (다국어처리)";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap center">
          <img src={require("statics/img/development/localization/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            보통 언어 변경을 하면 해당하는 언어를 서버에서 클라이언트로 전달하여 표현합니다.
            다양한 이유가 있지만 큰 이유 중 하나는 검색 엔진 최적화(SEO) 때문입니다.
          </p>
          <p>
            하지만 특수한 경우에 클라이언트에서만 동적으로 언어 리소스를 처리해야 할 이슈가 있는데<br />
            당시 구현한 핵심적인 부분을 코드로 정리해두었습니다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2013</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>동적 다국어 처리 데모 구현</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>Javascript</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="https://jsbin.com/tefolaf/1/edit?js,output" className="button" target="_blank">Live</a>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default Localization;
