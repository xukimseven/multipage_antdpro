import React, { PureComponent } from "react";
import { Tag } from "antd";
import PageCssData from "@/static/PageCssData";
import { connect } from "dva";
import _ from "lodash";
import router from "umi/router";

const { gap_normal, gap_small, flexCenter } = PageCssData;

@connect(({ routers, loading }) => ({ routers, loading }))
export default class BimTopRouterTabs extends PureComponent {
  state = {
    routers: [],
    currentRouter: {}
  };

  componentDidMount() {
    // console.log('componentDidMount', this.props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const {
      routers: { routers, currentRouter }
    } = nextProps;

    this.setState({
      routers: [...routers],
      currentRouter: { ...currentRouter }
    });
  }

  handleClose = removedTag => {
    const { routers, currentRouter } = this.state;

    let removeIdx = 0;
    routers.map((d, idx) => {
      if (removedTag.path === d.path) {
        removeIdx = idx;
      }
    });

    let newCurrent = {};

    if (currentRouter.path === removedTag.path) {
      if (routers.length) {
        newCurrent =
          removeIdx === routers.length - 1
            ? { ...routers[removeIdx - 1] }
            : { ...routers[removeIdx + 1] };
      }
    } else {
      newCurrent = { ...currentRouter };
    }

    this.jumpEvent(newCurrent);
    this.saveEvent([...routers.filter(d => d.path !== removedTag.path)], {
      ...newCurrent
    });
  };

  jumpEvent = currentRouter => {
    router.push(currentRouter.path);
  };

  saveEvent = (routers, currentRouter) => {
    this.props.dispatch({
      type: "routers/save",
      payload: {
        routers: [...routers],
        currentRouter: { ...currentRouter }
      }
    });
  };

  render() {
    const wrapper = {
      width: "100%",
      height: 40,
      backgroundColor: "#fff",
      borderTop: "1px solid #ebebeb",
      padding: `0 ${gap_small}px`,
      ...flexCenter,
      justifyContent: "flex-start"
    };

    const { routers, currentRouter } = this.state;

    return (
      <div style={{ ...wrapper }}>
        {routers.map((t, idx) => {
          return (
            <Tag
              key={idx}
              closable={t.name !== "home"}
              onClose={e => {
                e.preventDefault();
                this.handleClose(t);
              }}
              style={{
                height: 30,
                fontSize: 14,
                cursor: "pointer",
                ...flexCenter
              }}
              color={currentRouter.path === t.path ? "#108ee9" : ""}
              onClick={() => {
                this.jumpEvent(t);
                this.saveEvent([...routers], { ...t });
              }}
            >
              {t.title}
            </Tag>
          );
        })}
      </div>
    );
  }
}
