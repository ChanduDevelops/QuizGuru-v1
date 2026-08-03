const adminMail = 'admin@gmail.com';
const protectedPages = ['/main.html', '/qsns.html', '/report.html'];
const adminOnlyPages = ['/admin.html'];

function requireAuth(req, res, next) {
    if (adminOnlyPages.includes(req.path)) {
        if (!req.session.user || req.session.user !== adminMail) {
            return res.redirect('/users/login.html');
        }
    } else if (protectedPages.includes(req.path)) {
        if (!req.session.user) {
            return res.redirect('/users/login.html');
        }
    }
    next();
}

module.exports = requireAuth;