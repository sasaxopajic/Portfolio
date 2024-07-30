import React from "react";
import { useProjectByIdQuery } from "../../../services/queries/projects.query";
import { useParams } from "react-router-dom";
import styles from './Project.module.scss';
import BackToTopButton from "../../back-to-top-button/BackToTopButton";

export default function Project() {
  const { projectId } = useParams(); // Get projectId from URL params
  const { data: project, isLoading, isError } = useProjectByIdQuery(projectId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.name}>{project?.name}</h1>
        <h2 className={styles.description}>{project?.description}</h2>
      </div>
  
      <div className={styles.section}>
        <h3>Background</h3>
        <div>{project?.background}</div>
      </div>
  
      <div className={styles.section}>
        <h3>Problem</h3>
        <div>{project?.problem}</div>
      </div>
  
      <div className={styles.section}>
        <h3>Goals</h3>
        <ul>
          {project.goals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
      </div>
  
      <div className={styles.section}>
        <div className={styles.images}>
          {project.images.slice(1).map((image, i) => (
            <img key={i} className={styles.image} src={image?.imageUrl} alt={`Project Image ${i}`} />
          ))}
        </div>
      </div>
  
      <div className={styles.section}>
        <h2 className={styles.heading}>{project?.heading}</h2>
      </div>
  
      <div className={styles.section}>
        <h3>Project Overview</h3>
        <div className={styles.overview}>{project?.overview}</div>
      </div>
  
      <div className={styles.section}>
        <h3>Project Details</h3>
        <div className={styles.details}>
          <ul>
            <li>
              <span>Project:</span> {project?.details.project}
            </li>
            <li>
              <span>Duration:</span> {project?.details.duration}
            </li>
          </ul>
        </div>
      </div>
  
      <div className={styles.section}>
        <h3>Responsibilities & Contributions</h3>
        <ol className={styles.contributions}>
          {project?.contributions.map((contribution, i) => (
            <li key={i}>
              <span>{contribution.name}:</span>
              <ul>
                {contribution.description.map((data, j) => (
                  <li key={j}>{data}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
  
      <div className={styles.section}>
        <h3>Achievements & Outcomes</h3>
        <ul className={styles.outcomes}>
          {project?.outcomes.map((outcome, i) => (
            <li key={i}>
              <span>{outcome.name}</span>: {outcome.description}
            </li>
          ))}
        </ul>
      </div>
  
      <div className={styles.section}>
        <h3>Technologies & Tools Used</h3>
        <ul className={styles.technologies}>
          {project?.technologies.map((technology, i) => (
            <li key={i}>{technology}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Impact</h3>
        <div>
          {project.impact}
        </div>
      </div>

      <div className={styles.section}>
        <h3>User Feedback</h3>
        <div>
          <ul>
            {project?.userFeedback.map((feedback, i) => (
              <li key={i}>
                <span>{feedback.source}:</span> {feedback.feedback}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Challenges</h3>
        <div>
          <ul>
            {project?.challenges.map((challenge, i) => (
              <li key={i}>
                <strong>Challenge:</strong> {challenge.challenge}<br />
                <strong>Solution:</strong> {challenge.solution}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Design Iterations</h3>
        <div>
          <ul>
            {project?.designIterations.map((iteration, i) => (
              <li key={i}>
                <strong>{iteration.iteration}:</strong> {iteration.description}<br />
                <strong>Outcome:</strong> {iteration.outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
  
      <div className={`${styles.section} ${styles.conclusion}`}>
        <h3>Conclusion</h3>
        <div className={styles.conclusion}>{project?.conclusion}</div>
      </div>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}
