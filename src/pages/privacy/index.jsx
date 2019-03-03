import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Header from '../../components/header';
import withLayout from '../../components/with-layout';

import style from './style';

export default withLayout(() => {
  return (
    <>
      <Helmet title="Privacy Statement" />
      <Header title="Privacy Statement" />
      <article>
        <style jsx>{style}</style>

        <h2>Objective</h2>

        <p>
          The objective of this web site is to raise awareness and understanding
          of the Council of Europe Convention on combatting violence against
          women and domestic violence and provide insight as to the attitude of
          responders. It achieves this through enabling users to answer 8
          questions and then compare their results with the aggregate of other
          users.
        </p>

        <p>
          The site is hosted by netlify who store access logs including the IP
          addresses of site visitors, stored for a period of less than 30 days.
        </p>

        <p>
          The database is hosted by{' '}
          <a href="https://scalegrid.io/dpa.html">ScaleGrid</a>. It does not
          store any personal information.
        </p>

        <p>
          Only: (i) questionId (number)and (ii) answer1, answer2, answer3
          (percentages)
        </p>

        <p>Analytics are performed by the Council of Europe using Matomo.</p>

        <h2>
          What personal information do we collect, for what purpose and through
          which technical means?
        </h2>

        <p>
          The only personal information the website 8 Questions on 8 March
          collects is the IP address of a user which is disposed of within 30
          days.
        </p>

        <p>
          The website collects the following data for the following purposes:
        </p>

        <ol>
          <li>
            access logs including the IP addresses of site visitors, stored for
            a period of less than 30 days (collected by netlify who host the
            site)
          </li>

          <li>
            the database hosted by{' '}
            <a href="https://scalegrid.io/dpa.html">ScaleGrid</a>
            does not store any personal information. It stores the following
            information to enable the calculations of average responder to be
            performed: (i) questionId (number)and (ii) answer1, answer2, answer3
            (percentages)
          </li>

          <li>
            Furthermore, to make this website work properly, we place small data
            files called “cookies” on your device. These cookies enable the
            website to remember the session ID of authenticated users, keeping
            them logged in for a given period.
          </li>
        </ol>

        <p>
          The 8 Questions for 8 March website uses Matomo Analytics, a web
          analytics service to help analyse the use of this website on the basis
          of visitors’ behaviour. More information about the use of cookies on
          Council of Europe websites can be found at the following link.
        </p>

        <h2>Who has access to your information and to whom is it disclosed?</h2>

        <h3>How long do we keep your data?</h3>

        <p>
          The personal data of the IP address will be kept for less than 30
          days. The database of responses will most likely be kept for 1 year
          for the purpose of analysis.
        </p>

        <h2>Contact Information</h2>

        <p>
          In case you wish to verify which personal data is stored, have it
          modified, corrected, or deleted, or if you have questions regarding
          the web site, or concerning any information processed in the context
          of the web site, or on your rights, feel free to contact the support
          team, using the following contact information:
        </p>

        <p>
          <a href="mailto:conventionviolence@coe.int">
            conventionviolence@coe.int
          </a>
        </p>

        <h2>Recourse</h2>

        <p>
          In case of conflict the CoE’s Data Protection Commissioner can be
          contacted:
        </p>

        <p>
          <strong>Mr Jean-Philippe Walter</strong>
          <br />
          <br />
          Data Protection Commissioner
          <br />
          DG I - Human Rights and Rule of Law
          <br />
          Data protection Unit
          <br />
          Council of Europe
          <br />
          F-67075 Strasbourg Cedex
          <br />
          <br />
          <a href="mailto:datacommissioner@coe.int">datacommissioner@coe.int</a>
        </p>
      </article>
    </>
  );
});

export const query = graphql`
  query {
    translations: allMarkdownRemark(
      filter: {
        fields: { folderGroup: { eq: "translations" }, folder: { eq: "en" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            introTitle

            councilOfEurope
            footerContact
            footerPrivacy
            footerFollowUs
            footerIstanbulConvention
          }
        }
      }
    }
  }
`;
