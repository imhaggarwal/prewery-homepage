import React from 'react';
import './Pipeline.css';

const Pipeline = () => {
  return (
    <div className="pipeline-wrapper">
      <header className="pipeline-header">
        <h1>
          The <span className="highlight">Pipeline</span> Behind Every<br />
          Successful Campaign.
        </h1>
        <p>
          A connected workflow that brings together creators, conversations and<br />
          campaign management from start to finish
        </p>
      </header>

      <div className="pipeline-track">
        
        
        {/* Step 1 */}
        <div className="step-row row-1">
          <div className="path-line path-0"></div>
          <div className="card-ui">
            
            <div className="card-header bg-purple">
              <span>Create a Project</span>
              <div className="avatar-circle img-1"></div>
            </div>
            <div className="card-body">
              <div className="project-grid">
                <div className="project-box">
                  <div className="circle bg-yellow"></div>
                  <span>Website</span>
                </div>
                <div className="project-box">
                  <div className="circle bg-green"></div>
                  <span>Blog</span>
                </div>
                <div className="project-box">
                  <div className="circle bg-pink"></div>
                  <span>In-depth</span>
                </div>
                <div className="project-box">
                  <div className="circle bg-blue"></div>
                  <span>Thread</span>
                </div>
              </div>
            </div>
          </div>
          <div className="step-text border-1">
            Submit your campaign brief,<br />
            objectives and requirements<br />
            to get started.
          </div>
          {/* Signal Trace 1: Routing Left to Right */}
          <div className="path-line path-1"></div>
        </div>

        {/* Step 2 */}
        <div className="step-row row-2">
          <div className="step-text border-2">
            Discover and shortlist<br />
            creators that align with<br />
            your brand and<br />
            audience.
          </div>
          <div className="card-ui">
            <div className="card-header bg-yellow-light">
              <span>Creator Network</span>
            </div>
            <div className="card-body">
              <div className="creator-grid">
                <div className="creator-profile">
                  <div className="check-icon">✓</div>
                  <div className="profile-img img-2"></div>
                  <div className="profile-name">Dan Gatwa</div>
                  <div className="profile-tag">Writer</div>
                </div>
                <div className="creator-profile">
                  <div className="check-icon">✓</div>
                  <div className="profile-img img-3"></div>
                  <div className="profile-name">Sofia S</div>
                  <div className="profile-tag">Editor</div>
                </div>
                <div className="creator-profile">
                  <div className="check-icon">✓</div>
                  <div className="profile-img img-4"></div>
                  <div className="profile-name">Tom Elliot</div>
                  <div className="profile-tag">Editor</div>
                </div>
              </div>
            </div>
          </div>
          {/* Signal Trace 2: Routing Right to Left */}
          <div className="path-line path-2"></div>
        </div>

        {/* Step 3 */}
        <div className="step-row row-3">
          <div className="card-ui">
            <div className="card-header bg-green-light">
              <span>Your Chats</span>
            </div>
            <div className="card-body">
              <div className="chat-container">
                <div className="chat-row left">
                  <div className="avatar-circle sm img-1"></div>
                  <div className="chat-bubble">Can you make the changes<br/>we discussed to article 1?</div>
                </div>
                <div className="chat-row right">
                  <div className="chat-bubble reply">Sure</div>
                  <div className="avatar-circle sm img-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="step-text border-3">
            Our team manages<br />
            outreach, negotiations,<br />
            coordination and<br />
            communication end-to-end.
          </div>
          {/* Signal Trace 3: Routing Left to Right */}
          <div className="path-line path-3"></div>
        </div>

        {/* Step 4 */}
        <div className="step-row row-4">
          <div className="path-line path-4"></div>
          <div className="step-text border-4">
            Monitor campaign<br />
            progress, creator<br />
            deliverables and<br />
            performance from a<br />
            single dashboard.
          </div>
          <div className="card-ui">
            <div className="card-header bg-grey">
              <span>All Projects</span>
            </div>
            <div className="card-body">
              <div className="kanban-ui">
                <div className="kanban-text">Content marketing articles</div>
                <div className="kanban-bar-container">
                  <div className="kanban-bar chunk-1"></div>
                  <div className="kanban-bar chunk-2"></div>
                  <div className="kanban-bar chunk-3"></div>
                </div>
                {/* Floating tooltip logic */}
                <div className="kanban-tooltip">
                  <strong>Blog Articles</strong>
                  <ul>
                    <li><span className="dot d-green"></span> Completed</li>
                    <li><span className="dot d-yellow"></span> Spending</li>
                    <li><span className="dot d-grey"></span> Drafts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pipeline;