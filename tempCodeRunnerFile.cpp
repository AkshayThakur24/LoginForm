#include<iostream>
using namespace std;



string encode(string &message)
{
    string str;
    int arr[26]={0};


    for(int i=0;i<message.length();i++)
    {
        int ch = message[i]-'a';
        arr[ch]++;

    }

  
    for(int i=0;i<26;i++){
        if(arr[i]>=1){
            str.push_back(i+'a');
            string c = to_string(arr[i]);
            str.append(c);
        }
    }
    return str;
}

int main(){

string str="abbdcaas";

cout<<encode(str);

return 0;
}