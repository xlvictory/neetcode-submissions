class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let tested = [];

        if(s.length !== t.length){
            return false;
        }

        for(let i = 0; i < s.length; i++){
            if (tested.includes(s[i])){
                continue;
            } else if(s.split(s[i]).length !== t.split(s[i]).length) {
                return false;
            } else {
                tested.push(s[i]);
            }
        } return true;
    }
}
