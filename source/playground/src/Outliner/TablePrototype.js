import React from 'react';

const TablePrototype = () => {
  return (
    <table className="ui unstackable very basic table">
      <thead>
        <tr>
          <th></th>
          <th className="ten wide">Topic</th>
          <th>Since</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr className="level-1">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret down icon"></i></span>
            <span className="caption">QPLOT</span>
            <span className="description"><strong>Postion:</strong> Owner</span>
          </td>
          <td>Jan 14</td>
          <td></td>
        </tr>
        <tr className="level-2">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret down icon"></i></span>
            <span className="caption">Playground</span>
            <span className="description"><strong>Description: </strong>Would like to reduce cost in developing prototyping decent apps by leveraging infrastructure provided by framework. This is to explore an idea to see if a long term development environment can be established for sustainability. And this is extended by using GitHub one repo and further inspired by MercuryGate’ large code reservoir.</span>
          </td>
          <td>Nov 18</td>
          <td>★★</td>
        </tr>          
        <tr className="level-3">
          <td></td>
          <td className="title">
            <span className="folder"><i className="file alternate outline icon"></i></span>
            <span className="caption">Outliner </span>
            <span className="description">Display xml outliner file on web via opml file format</span>
          </td>
          <td>Nov 18</td>
          <td></td>
        </tr>
        <tr className="level-3">
          <td></td>
          <td className="title">
            <span className="folder"><i className="file alternate outline icon"></i></span>
            <span className="caption">TestSheet </span>
            <span className="description">Math question answer sheet for basic operations</span>
          </td>
          <td>Nov 18</td>
          <td></td>
        </tr>
        <tr className="level-2">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret right icon"></i></span>
            <span className="caption">Scheduler </span>
            <span className="description"><strong>Description: </strong>Develop for mathnasium app for scheduling app that assign teacher with students. The effort is paid via Mathnasium.</span>
          </td>
          <td>Sep 18</td>
          <td>★★★</td>
        </tr>              
        <tr className="level-2">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret down icon"></i></span>
            <span className="caption">Github - aka. KB </span>
            <span className="description"><strong>Description: </strong> Started as a new workflow from working local markdown file to online viewer, this project goes very successful in becoming the dream-about personal knowledgebase system. And from idea to production it takes less than one month. “The workflow it established is fundamental scalable in terms of bringing ideas/data from paper level to potential organized format.”</span>
          </td>
          <td>Jan 18</td>
          <td>★★★★</td>
        </tr>
        <tr className="level-3">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret down icon"></i></span>
            <span className="caption">Hosting </span>
            <span className="description">Math question answer sheet for basic operations</span>
          </td>
          <td>Nov 18</td>
          <td></td>
        </tr>
        <tr className="level-4">
          <td></td>
          <td className="title">
            <span className="folder"><i className="file alternate outline icon"></i></span>
            <span className="caption">Blogs</span>
            <span className="description">Personal blogs and thoughts</span>
          </td>
          <td></td>
          <td></td>
        </tr>    
        <tr className="level-4">
          <td></td>
          <td className="title">
            <span className="folder"><i className="file alternate outline icon"></i></span>
            <span className="caption">Resume</span>
            <span className="description">Resume and projects materials</span>
          </td>
          <td></td>
          <td></td>
        </tr>   
        <tr className="level-4">
          <td></td>
          <td className="title">
            <span className="folder"><i className="file alternate outline icon"></i></span>
            <span className="caption">Repos</span>
            <span className="description">Github repositories and README</span>
          </td>
          <td></td>
          <td></td>
        </tr>        
        <tr className="level-4">
          <td></td>
          <td className="title">
            <span className="folder"><i className="file alternate outline icon"></i></span>
            <span className="caption">Todo</span>
            <span className="description">Fang's todo and notes</span>
          </td>
          <td></td>
          <td></td>
        </tr>   
        <tr className="level-2">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret down icon"></i></span>
            <span className="caption">Knowledge-base</span>
            <span className="description"><strong>Description: </strong> Centralize project, payment, and other knowledge-base information into more organized outliner data format such as OmniOutliner files. Over five years of practice, this is proven to be a strong stepping stone in supporting hierarchy data with relatively well defined format. Currently it includes blueprints, payment, projects, purchases, storages and trades. </span>
          </td>
          <td>Nov 15</td>
          <td>★★★★★</td>
        </tr>  
        <tr className="level-3">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret down icon"></i></span>
            <span className="caption">Purchases </span>
            <span className="description">Inventory purchased books, software, subscription and hardware.</span>
          </td>
          <td>Nov 18</td>
          <td></td>
        </tr>    
        <tr className="level-4">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret right icon"></i></span>
            <span className="caption">Books</span>
            <span className="description"></span>
          </td>
          <td></td>
          <td></td>
        </tr>   
        <tr className="level-4">
          <td></td>
          <td className="title">
            <span className="folder"><i className="caret right icon"></i></span>
            <span className="caption">Software</span>
            <span className="description"></span>
          </td>
          <td></td>
          <td></td>
        </tr>   
        <tr className="level-5">
          <td></td>
          <td className="title">
            <span className="folder"><i className="file alternate outline icon"></i></span>
            <span className="caption">Paid</span>
            <span className="description"></span>
          </td>
          <td></td>
          <td></td>
        </tr>   
        <tr className="level-5">
          <td></td>
          <td className="title">
            <span className="folder"><i className="file alternate outline icon"></i></span>
            <span className="caption">Free</span>
            <span className="description"></span>
          </td>
          <td></td>
          <td></td>
        </tr>   
      </tbody>
      <tfoot className="full-width">
        <tr>
          <th></th>
          <th colSpan="4">
            <div className="ui right floated small primary labeled icon button">
              <i className="user icon"></i> Add User
            </div>
            <div className="ui small  button">
              Approve
            </div>
            <div className="ui small  disabled button">
              Approve All
            </div>
          </th>
        </tr>
      </tfoot>
    </table>    
  );
};

export default TablePrototype;
