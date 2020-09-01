import React, { Component } from "react";
import { Container, EllipseBackground, Topic } from "../../global-styles";

export default class SelectTopics extends Component {
  render() {
    const topics = [
      { id: 0, title: "Topico 0" },
      { id: 1, title: "Topico 1" },
      { id: 0, title: "Topico 0" },
      { id: 1, title: "Topico 1" },
      { id: 0, title: "Topico 0" },
      { id: 1, title: "Topico 1" },
      { id: 0, title: "Topico 0" },
      { id: 1, title: "Topico 1" },
      { id: 0, title: "Topico 0" },
      { id: 1, title: "Topico 1" },
    ];
    return (
      <div>
        <EllipseBackground>
          <Container select>
            <section>
              <div>
                <h1>Faça uma busca ...</h1>
              </div>
              <div>
                {topics.map((topic) => (
                  <Topic>{topic.title}</Topic>
                ))}
              </div>
            </section>
          </Container>
        </EllipseBackground>
      </div>
    );
  }
}
