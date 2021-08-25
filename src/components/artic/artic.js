import { useMemo, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { getArt } from "../../store/art";
import { Artworks } from "./artworks";
import { Exhibitions } from "./exhibitions";

const useStyles = makeStyles({
  loading: {
    padding: "20px",
    fontSize: "24px",
    fontWeight: "bold"
  },
  error: {
    padding: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "red"
  },
  card: {
    display: "flex",
    width: "500px"
  },
  button: {
    margin: "2px",
    cursor: "pointer",
    outline: "none",
    border: "none",
    "&:hover": {
      backgroundColor: "#17212b",
      color: "#fff"
    }
  },
  buttonTitle: {
    padding: "8px 26px"
  },
  buttonPage: {
    padding: "8px"
  }
});

const articles = {
  artworks: (props) => <Artworks item={props} />,
  exhibitions: (props) => <Exhibitions item={props} />
};

export const Artic = () => {
  const { articlePage } = useParams();

  const classes = useStyles();

  const { data, loading, error } = useSelector((state) => state.art);
  const dispatch = useDispatch();

  const handleClickArticle = useCallback(
    ({ target }) => {
      const { article, page } = target.dataset;
      dispatch({ type: "ART_FETCH_REQUESTED", payload: { article, page } });
    },
    [dispatch]
  );

  const dataArticle = data.data ? [...data.data] : [];
  const dataPages = data.pagination ? { ...data.pagination } : [];

  return (
    <>
      {Object.keys(articles).map((item, idx) => (
        <Link key={idx} to={`/artic/${item}`}>
          <button
            data-article={item}
            data-page={1}
            className={classnames(classes.button, classes.buttonTitle)}
            onClick={handleClickArticle}
          >
            {item}
          </button>
        </Link>
      ))}
      {articlePage && loading && (
        <div className={classes.loading}>...loading</div>
      )}
      {articlePage && error && (
        <>
          <div className={classes.error}>Error: {error}</div>
          <button
            data-article={articlePage}
            data-page={1}
            className={classnames(classes.button, classes.buttonTitle)}
            onClick={handleClickArticle}
          >
            загрузить заново
          </button>
        </>
      )}
      {articlePage && !loading && (
        <div>
          {dataPages && (
            <div>
              <button
                className={classnames(classes.button, classes.buttonPage)}
                data-page={11 - dataPages.offset / dataPages.limit}
                data-article={articlePage}
                onClick={handleClickArticle}
              >
                {"<"}
              </button>
              {Array.from({ length: 10 }).map((_, idx) => (
                <button
                  className={classnames(classes.button, classes.buttonPage)}
                  key={idx}
                  data-article={articlePage}
                  data-page={idx + 1 + dataPages.offset / dataPages.limit}
                  onClick={handleClickArticle}
                >
                  {idx + 1 + dataPages.offset / dataPages.limit}
                </button>
              ))}
              <button
                className={classnames(classes.button, classes.buttonPage)}
                data-page={11 + dataPages.offset / dataPages.limit}
                data-article={articlePage}
                onClick={handleClickArticle}
              >
                {">"}
              </button>
            </div>
          )}
          {dataArticle.map((item, idx) => (
            <div className={classes.card} key={idx}>
              {articles[articlePage](item)}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
