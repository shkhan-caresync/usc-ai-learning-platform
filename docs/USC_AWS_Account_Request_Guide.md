# USC AWS Account Request Guide
## AI Simulation Platform — Pilot Program
### For Suzanne Dworak-Peck School of Social Work

---

## Overview

This guide provides recommended responses for requesting a USC AWS account under USC's Enterprise Customer Agreement (ECA). Using a USC-provided AWS account eliminates TPSR (Third Party Security Review) requirements since the infrastructure becomes USC-controlled.

---

## Benefits of USC AWS Account

| Before (3rd Party AWS) | After (USC AWS Account) |
|------------------------|-------------------------|
| ❌ TPSR likely required | ✅ No TPSR (USC infrastructure) |
| ❌ Pseudonymous login needed | ✅ Can use real student emails |
| ❌ Complex FERPA handling | ✅ Under USC's ECA agreement |
| ❌ Separate billing/invoicing | ✅ USC consolidated billing |
| ❌ Vendor compliance burden | ✅ USC manages compliance |

---

## Form Responses

### Section 1: Basic Information

| Field | Suggested Value | Notes |
|-------|-----------------|-------|
| **Short Description** | `AI Simulation Platform for Social Work student training - pilot program` | 150 char limit |
| **Account requester name** | [USC Faculty/Staff sponsor] | Must be USC employee |
| **Account owner name** | [USC Faculty/Staff sponsor] | Must be USC employee |
| **USC Organizational Account name** | [Ask USC IT] | Usually school-level |
| **Proposed USC AWS account name** | `usc-socialwork-ai-simulation-pilot` | Descriptive, lowercase |

### Section 2: Compliance

| Field | Answer | Rationale |
|-------|--------|-----------|
| **HIPAA compliant?** | **No** | Educational platform, not healthcare |
| **GovCloud?** | **No** | Not federal/government project |
| **Production services?** | **Yes** | Students will actively use platform |

### Section 3: Organization Details

| Field | Suggested Value |
|-------|-----------------|
| **School and Research group** | `Suzanne Dworak-Peck School of Social Work` |
| **Project name** | `AI-Powered Virtual Simulation Platform` |
| **Lead technical contact** | [Technical lead name + contact] |
| **Alternate contact (cell)** | [Cell phone for urgent issues] |
| **Purchasing officer** | [School's purchasing contact] |

### Section 4: Network Requirements

| Field | Answer | Rationale |
|-------|--------|-----------|
| **Access to USC Datacenter?** | **No** | Cloud-native, no on-prem needed |
| **Access to Internet?** | **Yes** | Required for users, Tavus, Bedrock |
| **Max systems requiring USC IP (CIDR)?** | `0` | Using AWS public IPs only |

---

## Request Details (Full Description)

Copy and paste into the "Request Details" field:

```
AI-Powered Virtual Simulation Platform for MSW/BSW Student Training

PURPOSE:
Pilot program to deploy an AI-driven simulation platform for social work 
student training at the Suzanne Dworak-Peck School of Social Work. The 
platform provides realistic AI avatar-based client simulations to help 
students practice clinical skills in a safe environment.

SCOPE:
- Pilot: 100-300 active students
- Web-based platform (no on-premise components)
- Integration with AWS Bedrock for AI/LLM capabilities
- Student session data stored in RDS PostgreSQL
- Video recordings stored in USC OneDrive (Microsoft)
- Static assets only in S3 (no student PII)

AWS SERVICES REQUIRED:
- Amazon RDS PostgreSQL (database)
- Amazon ECS Fargate (containerized application)
- Amazon Bedrock (AI foundation models - Claude)
- Amazon Cognito (user authentication)
- Amazon S3 (static web assets only)
- Amazon CloudFront (CDN)
- Amazon API Gateway (REST + WebSocket)
- Amazon CloudWatch (logging and monitoring)
- AWS Secrets Manager (credentials)
- Amazon VPC (networking)

DATA CLASSIFICATION:
- Student educational records (FERPA-protected)
- No HIPAA/PHI data
- No payment/financial data
- No classified or export-controlled data

ESTIMATED MONTHLY COST:
- Pilot phase: $500-1,000/month
- See attached cost breakdown

TIMELINE:
- Development: Q1-Q2 2026
- Pilot Launch: Q3 2026
- Full Deployment: TBD based on pilot results

DEVELOPMENT PARTNER:
OxbridgeEducation will develop the platform under contract.
- Full IP ownership transfers to USC
- Development team will need IAM access during build phase
- Access can be revoked post-launch

USC OWNERSHIP:
- USC will own 100% of source code and IP
- USC will control all data and infrastructure
- USC can maintain independently post-launch

CONTACTS:
- Project Sponsor: [Name, Email, Phone]
- Technical Lead: [Name, Email, Phone]
- Development Partner: OxbridgeEducation [Contact info]

ATTACHMENTS:
- Architecture document (USC_AI_Platform_Architecture_v2.md)
- Cost breakdown
```

---

## Questions to Resolve Before Submitting

| Question | Who to Ask | Why It Matters |
|----------|------------|----------------|
| Who will be AWS Account Owner? | School leadership | Must be USC employee |
| Existing USC Organizational Account? | USC IT | May already exist for school |
| Purchasing Officer contact? | School admin | Required for billing |
| Budget code/cost center? | School finance | For AWS charges |
| IAM access for OxbridgeEducation? | USC IT | Dev team needs access |

---

## Post-Approval: What OxbridgeEducation Needs

Once USC approves the AWS account, provide to development team:

| Item | Purpose |
|------|---------|
| AWS Account ID | Target account for deployment |
| IAM User/Role credentials | Developer access |
| VPC configuration | Network setup |
| Approved regions | Where to deploy (us-west-2?) |
| Tagging requirements | USC cost allocation tags |
| Security guardrails | Any USC-specific policies |

---

## Architecture Impact

With USC AWS account, the architecture simplifies:

### Data Storage (All USC-Controlled)

| Data Type | Storage | FERPA Status |
|-----------|---------|--------------|
| Student accounts (email, name) | Cognito | ✅ USC AWS |
| User profiles | RDS PostgreSQL | ✅ USC AWS |
| Session transcripts | RDS PostgreSQL | ✅ USC AWS |
| AI feedback/scores | RDS PostgreSQL | ✅ USC AWS |
| Video recordings | USC OneDrive | ✅ USC Microsoft |
| Static assets | S3 | ✅ USC AWS (no PII) |

### Authentication Options (Now Available)

| Method | Feasibility | Notes |
|--------|-------------|-------|
| USC SSO (SAML) | ✅ Recommended | Best UX, single sign-on |
| Email/Password (Cognito) | ✅ Available | Backup option |
| Access Codes | ✅ Available | Still possible if preferred |

**Recommendation:** Use **USC SSO (SAML)** for seamless student experience.

---

## Cost Allocation

USC AWS accounts typically require cost allocation tags:

| Tag | Example Value |
|-----|---------------|
| `usc:school` | `dworak-peck` |
| `usc:department` | `social-work` |
| `usc:project` | `ai-simulation-platform` |
| `usc:environment` | `production` / `development` |
| `usc:owner` | `[faculty-email]` |
| `usc:cost-center` | `[budget code]` |

*Confirm required tags with USC IT before deployment.*

---

## Security Considerations

USC AWS accounts are typically subject to:

| Requirement | How We Comply |
|-------------|---------------|
| MFA required | Enable MFA for all IAM users |
| CloudTrail logging | Enabled by default (USC policy) |
| Config rules | Follow USC baseline |
| VPC flow logs | Enable for audit |
| Encryption at rest | Enable on RDS, S3 |
| No public S3 buckets | CloudFront for public access |

---

## Timeline

| Step | Owner | Duration |
|------|-------|----------|
| Submit AWS request form | USC Sponsor | Day 1 |
| USC IT review | USC IT | 1-2 weeks |
| Account provisioning | USC IT | 1 week |
| IAM access for dev team | USC IT | 2-3 days |
| Infrastructure setup | OxbridgeEducation | 1 week |
| Development begins | OxbridgeEducation | Ongoing |

**Total lead time:** ~3-4 weeks from submission to development start

---

## Attachments to Include

When submitting the form, attach:

1. ✅ `USC_AI_Platform_Architecture_v2.md` — Full architecture document
2. ✅ Cost breakdown summary (from architecture doc)
3. ✅ Project timeline (if available)
4. ✅ OxbridgeEducation company info (if required)

---

## Contact Information

| Role | Name | Email | Phone |
|------|------|-------|-------|
| USC Project Sponsor | [TBD] | | |
| USC Technical Contact | [TBD] | | |
| USC Purchasing Officer | [TBD] | | |
| OxbridgeEducation Lead | [TBD] | | |

---

*Document Version: 1.0 | January 2026*
